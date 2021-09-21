import { UniqueIdService } from "./unique-id/unique-id.service";

describe ('UniqueIdService', () => {

  it('#generateUniqueIdWithPrefix should generate id', () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  })
  // it('teste', () => {
  //   const service = new UniqueIdService();
  //   const name = service.teste('yago');
  //   expect(name).toContain('yago');
  // })

});

