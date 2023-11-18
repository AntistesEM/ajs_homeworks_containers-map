import ErrorRepository from '../ErrorRepository';

test('Проверка создания MAP', () => {
  const newRepository = new ErrorRepository();

  expect(newRepository.errors).toBeInstanceOf(Map);
});

test.each([
  [400, 'Неверный запрос'],
  [403, 'Доступ запрещен'],
  [404, 'Не найдено'],
  [500, 'Unknown error'],
  [410, 'Unknown error'],
  [401, 'Unknown error'],
])('Проверка вывода текста ошибки', (code, text) => {
  const newRepository = new ErrorRepository();

  expect(newRepository.translate(code)).toBe(text);
});
