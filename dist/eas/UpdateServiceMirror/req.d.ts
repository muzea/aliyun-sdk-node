export interface UpdateServiceMirrorRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 流量比例，取值范围0~100。
         * @example `30`
         */
        Ratio: number;
        /**
         * 服务实例列表。
         */
        Target: string[];
    };
}
