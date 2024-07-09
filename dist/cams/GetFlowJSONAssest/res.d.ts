export interface GetFlowJSONAssestResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A9486641****`
     */
    RequestId: string;
    /**
     * 结果返回OK为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误描述信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * Flow ID。
         * @example `92675332812643****`
         */
        FlowId: string;
        /**
         * 文件路径。
         * @example `https://bucket-*****-ap-southeast-1.aliyuncs.com/9658820125168****.json`
         */
        FilePath: string;
    };
}
