export interface GetSubCrowdResponse {
    /**
     * Id of the request
     * @example `01D22D08-BA20-5F35-8302-99115F288220`
     */
    RequestId: string;
    /**
     * 人群来源。
     * ● ManualInput-手工输入
     * ● UploadFile-文件上传
     * @example `ManualInput`
     */
    Source: string;
    /**
     * 人群分组中的用户。
     * @example `user1,user2`
     */
    Users: string;
    /**
     * 人群分组所含的用户量。
     * @example `3`
     */
    Quantity: string;
    /**
     * 人群创建时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtCreateTime: string;
}
