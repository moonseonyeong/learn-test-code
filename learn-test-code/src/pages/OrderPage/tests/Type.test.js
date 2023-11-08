import { render, screen } from "@testing-library/react"
import Type from "../Type.js"
import { server } from '../../../mocks/server.js';
import { rest } from 'msw';

test("displays product images from server", async () => {
  render(<Type orderType="products" />);

  // 이미지 찾기
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);

  expect(altText).toEqual(["America product", "England product"]);
})


test('when fetching product datas, face an error', async () => {
  server.resetHandlers(
    rest.get('http://localhost:5000/products', (req, res) => {
      return res(ctx.status(500))
    })
  )

  render(<Type orderType="products" />);

  //비동기 요청 후 에러 발생
  const errorBanner = await screen.findByTestId('error-banner');

  expect(errorBanner).toHaveTextContent('에러가 발생했습니다.');

})