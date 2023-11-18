export default class ErrorRepository {
  constructor() {
    this.errors = new Map();

    this.errors.set(400, 'Неверный запрос');
    this.errors.set(403, 'Доступ запрещен');
    this.errors.set(404, 'Не найдено');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }

    return 'Unknown error';
  }
}
