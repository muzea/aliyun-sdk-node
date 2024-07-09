export interface ListUserCertificateOrderRequest {
    /**
     * 模糊查询，匹配域名或对应的资源ID。
     * @example `cert-instanceId`
     */
    "Keyword"?: string;
    /**
     * 订单状态。 状态取值：
     * - **PAYED**：待申请，当OrderType=CPACK或者BUY有效。
     * - **CHECKING**：审核中，当OrderType=CPACK或者BUY有效。
     * - **CHECKED_FAIL**：审核失败，当OrderType=CPACK或者BUY有效。
     * - **ISSUED**：已签发。
     * - **WILLEXPIRED**：即将过期。
     * - **EXPIRED**：已过期。
     * - **NOTACTIVATED**：未激活，当OrderType=CPACK或者BUY有效。
     * - **REVOKED**：吊销完成，当OrderType=CPACK或者BUY有效。
     * 当OrderType=CERT或者UPLOAD，Status为空时，将默认返回有效证书，包含已签发和即将过期证书。当OrderType=CPACK或者BUY，Status为空时，将默认返回全量订单。
     * @example `ISSUED`
     */
    "Status"?: string;
    /**
     * 资源类型。 默认为**CPACK**。取值：
     * - **CPACK**：资源虚拟订单，只返回额度生成的订单信息。
     * - **BUY**：售卖订单，只返回售卖生成的订单信息（大部分可以忽略该类型）。
     * - **UPLOAD**：上传证书，只返回上传证书。
     * - **CERT**： 证书，同时返回签发证书和上传证书。
     * @example `CPACK`
     */
    "OrderType"?: string;
    /**
     * 分页，当前页。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页，每页展示数据条数，默认50。
     * @example `10`
     */
    "ShowSize"?: number;
    /**
     * 资源组ID。此ID可通过调用[ListResources](~~2716559~~)接口获取。
     * @example `rg-ae******4wia`
     */
    "ResourceGroupId"?: string;
}
