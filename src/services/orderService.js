import { orderDAO } from '../data-access';

const orderService = {

  // 주문 저장하기
  async createOrder(orderInfo) {
    const createdOrder = await orderDAO.createOrder(orderInfo);
    return createdOrder;
  },

  // 모든 주문 정보 조회하기
  async getAllOrders() {
    const orders = await orderDAO.getAllOrders();

    return orders;
  },

  // 특정 유저의 모든 주문 정보 조회하기
  async getOrdersByUserId(ordererEmail) {
    const orders = await orderDAO.getOrdersByUserId(ordererEmail);

    return orders;
  },

  // 특정 orderId 에 해당하는 주문 정보 조회하기
  async getOrderByOrderId(orderId) {
    const order = await orderDAO.getOrderByOrderId(orderId);

    return order;
  },

  // 특정 orderId 에 해당하는 배송지 정보 수정
  async updateRecipientByOrderId(orderId, recipientInfo) {
    await orderDAO.updateRecipientByOrderId(orderId, recipientInfo);
  },

  // 특정 orderId 에 해당하는 주문 정보 삭제하기
  async deleteOrderByOrderId(orderId) {
    await orderDAO.deleteOrderByOrderId(orderId);
  },
};

export { orderService };
