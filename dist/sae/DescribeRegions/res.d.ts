export interface DescribeRegionsResponse {
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DDE85827-B0B3-4E56-86E8-17C42009****`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        Region: {
            /**
             * 地域名称。取值说明如下：
             * - **华东1（杭州）**
             * - **华东2（上海）**
             * - **华北2（北京）**
             * - **华北3（张家口）**
             * - **华南1（深圳）**
             * - **华南3（广州）**
             * - **中国（香港）**
             * - **新加坡**
             * - **美国（硅谷）**
             * @example `华东2（上海）`
             */
            LocalName: string;
            /**
             * 地域对应的接入地址。取值说明如下：
             * - **sae.cn-hangzhou.aliyuncs.com**
             * - **sae.cn-shanghai.aliyuncs.com**
             * - **sae.cn-beijing.aliyuncs.com**
             * - **sae.cn-zhangjiakou.aliyuncs.com**
             * - **sae.cn-shenzhen.aliyuncs.com**
             * - **sae.cn-guangzhou.aliyuncs.com**
             * - **sae.cn-hongkong.aliyuncs.com**
             * - **sae.ap-southeast-1.aliyuncs.com**
             * - **sae.us-west-1.aliyuncs.com**
             * @example `sae.cn-shanghai.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域ID。取值说明如下：
             * - **cn-hangzhou**：华东1（杭州）地域的ID。
             * - **cn-shanghai**：华东2（上海）地域的ID。
             * - **cn-beijing**：华北2（北京）地域的ID。
             * - **cn-zhangjiakou**：华北3（张家口）地域的ID。
             * - **cn-shenzhen**：华南1（深圳）地域的ID。
             * - **cn-guangzhou**：华南3（广州）地域的ID。
             * - **cn-hongkong**：中国香港地域的ID。
             * - **ap-southeast-1**：新加坡地域的ID。
             * - **us-west-1**：美国（硅谷）地域的ID。
             * @example `cn-shanghai`
             */
            RegionId: string;
            RecommendZones: {
                /**
                 * 推荐可用区。
                 */
                RecommendZone: string[];
            };
        }[];
    };
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: number;
}
