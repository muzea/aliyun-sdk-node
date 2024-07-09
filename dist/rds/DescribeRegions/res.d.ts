export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Regions: {
        /**
         * 可选的地域和可用区列表。
         */
        RDSRegion: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-j`
             */
            ZoneId: string;
            /**
             * 地域对应的服务接入地址（Endpoint）。更多信息，请参见[服务接入点](~~610370~~)。
             * @example `rds.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。根据**AcceptLanguage**参数的值返回不同的语言。以cn-hangzhou地域为例的返回示例如下：
             * * **AcceptLanguage**为**zh-CN**：华东1（杭州）
             * * **AcceptLanguage**为**en-US**：China (Hangzhou)
             * @example `China (Hangzhou)`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 可用区名称。根据**AcceptLanguage**参数的值返回不同的语言。以cn-hangzhou-j可用区为例的返回示例如下：
             * * **AcceptLanguage**为**zh-CN**：杭州 可用区J
             * * **AcceptLanguage**为**en-US**：Hangzhou Zone J
             * @example `Hangzhou Zone J`
             */
            ZoneName: string;
        }[];
    };
}
