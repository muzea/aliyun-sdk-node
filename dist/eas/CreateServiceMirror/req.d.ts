export interface CreateServiceMirrorRequest {
    /**
     * 服务所在区域。例如华东2（上海）为cn-shanghai。
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
         * 比例0~100。
         * @example `30`
         */
        Ratio: number;
        /**
         * 服务实例列表。
         */
        Target: string[];
    };
}
