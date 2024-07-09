export interface BindAxbResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9297B722-A016-43FB-B51A-E54050D9369D`
     */
    RequestId: string;
    /**
     * 号码绑定成功后返回的结构体。
     */
    SecretBindDTO: {
        /**
         * 接口BindAxb不涉及此参数，请忽略该返回参数。
         * @example `130`
         */
        Extension: string;
        /**
         * 号码绑定ID。
         * 您可以用返回的**号码绑定ID**，调用[QuerySubscriptionDetail](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-querysubscriptiondetail?spm=a2c4g.11186623.0.0.122b4d02RB4KDs)接口，查询号码绑定详情。
         * @example `100017838816****`
         */
        SubsId: string;
        /**
         * 已购买的隐私号码，即X号码。
         * @example `171****1893`
         */
        SecretNo: string;
    };
}
