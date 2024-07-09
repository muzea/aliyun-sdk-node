export interface ListCategoriesResponse {
    /**
     * 数据。类目节点信息，JSON字符传形式。
     * @example `[{\"categoryId\":\"43c2671b-8939-4223-****-6bd187905cc8\",\"childCategoryList\":[{\"categoryId\":\"120816ad-4392-4edf-****-6d053d5cfa5a\",\"childCategoryList\":[],\"deleted\":0,\"editor\":\"283277706217028904\",\"editorName\":\"283277706217028904\",\"instanceId\":\"cccV2-kmz\",\"itemCount\":0,\"level\":2,\"name\":\"客户反馈\",\"parentCategoryId\":\"43c2671b-8939-****-86d0-6bd187905cc8\",\"type\":\"Ticket\"}],\"deleted\":0,\"editor\":\"283277706217028904\",\"editorName\":\"283277706217028904\",\"instanceId\":\"cccV2-kmz\",\"itemCount\":10,\"level\":1,\"name\":\"测试一01类目\",\"type\":\"Ticket\"},{\"categoryId\":\"4948fcd0-2972-****-81c6-1a00927e1802\",\"childCategoryList\":[],\"deleted\":0,\"editor\":\"283277706217028904\",\"editorName\":\"283277706217028904\",\"instanceId\":\"cccV2-kmz\",\"itemCount\":0,\"level\":1,\"name\":\"生产环境验证\",\"type\":\"Ticket\"},{\"categoryId\":\"c426bd7f-9661-47c3-****-2508f1a32f66\",\"childCategoryList\":[],\"deleted\":0,\"editor\":\"269801834095770945\",\"editorName\":\"269801834095770945\",\"instanceId\":\"cccV2-kmz\",\"itemCount\":4,\"level\":1,\"name\":\"测试环境测试\",\"type\":\"Ticket\"}]`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
