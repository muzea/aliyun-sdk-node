export interface QueryVirtualNumberRelationResponse {
    /**
     * 请求状态码。
     * - 返回200代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 虚拟号和真实号绑定后的关系列表。部分字段含义：
     * - **relatedNum**：真实号码。
     * - **virtualNum**：虚拟号码。
     * - **createTime**：号码开通时间。
     * - **pageNo**：当前页码。
     * - **pagSize**：每页显示的条数。
     * - **total**：总数。
     * - **regionNameProvince**：号码归属省。
     * - **regionNameCity**：号码归属城市。
     * - **corpName**：企业名称。
     * @example `{"data":[{"regionNameProvince":"湖南","relatedNum":"0734284****","specName":"联通全国","createTime":"2021-07-02 16:04:49","regionNameCity":"衡阳","corpName":"阿里巴巴通信技术(北京)有限公司","virtualNum":"05710000****"},],"pageSize":20,"total":1,"pageNo": 1},}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `8FAD5988-B483-48A4-B251-6E8470A67371`
     */
    RequestId: string;
}
