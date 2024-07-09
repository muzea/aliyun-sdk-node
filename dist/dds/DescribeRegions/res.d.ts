export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `4E46C22C-D3B7-4DB8-9C76-63851BE68E20`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        DdsRegion: {
            Zones: {
                /**
                 * 可用区列表。
                 */
                Zone: {
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-h`
                     */
                    ZoneId: string;
                    /**
                     * 是否支持VPC，取值说明：
                     * - **true**：支持VPC。
                     * - **false**：不支持VPC。
                     * @example `true`
                     */
                    VpcEnabled: boolean;
                    /**
                     * 可用区名称。
                     * 根据**AcceptLanguage**参数的值返回不同的语言。以**cn-hangzhou-h**可用区为例，示例如下：
                     * - **AcceptLanguage**为**zh**：**杭州 可用区H**
                     * - **AcceptLanguage**为**en**：**Hangzhou Zone H**
                     * @example `杭州 可用区H`
                     */
                    ZoneName: string;
                }[];
            };
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 地域名称。
             * 根据**AcceptLanguage**参数的值返回不同的语言。以**cn-hangzhou**地域为例，示例如下：
             * - **AcceptLanguage**为**zh**：**华东1（杭州）**
             * - **AcceptLanguage**为**en**：**China (Hangzhou)**
             * @example `华东1（杭州）`
             */
            RegionName: string;
            /**
             * 公网接入地址。
             * 返回对应地域的公网接入地址，以cn-hangzhou地域为例，示例如下：
             * - mongodb.aliyuncs.com
             * @example `mongodb.aliyuncs.com`
             */
            EndPoint: string;
        }[];
    };
}
