export interface ListCloudVendorRegionsResponse {
    /**
     * 云厂商支持的Region信息列表。
     */
    Data: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * Region所属的区域，和Vendor类型有关。取值：
         * - **Vendor** = Tencent的取值：
         * - **cn**：中国
         * - **southeast_asia**：亚太东南
         * - **northeast_asia**：亚太东北
         * - **southern_asia**：亚太南部
         * - **north_America**：北美地区
         * - **south_America**：南美地区
         * - **western_America**：美国西部
         * - **eastern_America**：美国东部
         * - **european**：欧洲地区
         * - **Vendor** = HUAWEICLOUD的取值：
         * - **cn**：中国
         * - **africa**：非洲
         * - **latin_america**：拉美
         * - **asia**：亚太
         * - **Vendor** = Azure的取值：
         * - **middle_east**：中东
         * - **south_america**：南美洲
         * - **canada**：加拿大
         * - **asia_pacific**：亚太
         * - **europe**：欧洲
         * - **africa**：非洲
         * - **us**：美国
         * - **other**：其他
         * - **Vendor** = AWS的取值：
         * - **cn**：中国
         * - **us**：美国
         * - **eu**：欧洲
         * - **asia**：亚太地区
         * - **south_america**：南美洲
         * - **me**：中东
         * - **ca**：加拿大
         * - **af**：非洲
         * @example `cn`
         */
        Area: string;
        /**
         * 该region是否被其他站点设置为同步站点。取值：
         * - **0**：未被其他站点配置
         * - **1**：已被其他站点配置
         * @example `1`
         */
        Disable: number;
        /**
         * 该Region已被本站点配置为同步Region。取值：
         * - **0**：未被配置
         * - **1**：已被配置
         * @example `0`
         */
        Selected: number;
    }[];
    /**
     * 数据的总数量。
     * @example `2`
     */
    Count: number;
    /**
     * 调用状态。取值：
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C87EC6AD-4590-5546-9DF6-B8956579D***`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
