export interface QueryFaceUserBatchRequest {
    /**
     * 用户ID列表。请传入在调用[AddFaceUser](~~288338~~)接口添加用户后，获取并保存到本地的用户ID。
     * @example `["xqymlby****4whye","6qyyb69zqara****","64nbfx8****hzmy4"]`
     */
    "UserIdList": string[];
    /**
     * 业务隔离ID，用于隔离同一个阿里云账号下不同业务应用之间的数据。请与调用[AddFaceUser](~~288338~~)接口添加用户时设置的**IsolationId**保持一致。
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
}
