export interface AddCasterEpisodeGroupRequest {
    /**
     * 节目列表。
     */
    "Item": {
        /**
         * 节目名称。
         * @example `节目1`
         */
        ItemName: string;
        /**
         * 点播文件地址。
         * 如果您通过[DescribeCasterVideoResources接口](~~60264~~)查询导播台视频源，请查看DescribeCasterVideoResources接口调用返回的参数VodUrl值。
         * > 当且仅当资源为文件视频，且视频文件未导入素材库时使用。<br>
         * 支持MP4、FLV、TS格式。
         * @example `http://learn.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****.flv?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****`
         */
        VodUrl: string;
    }[];
    /**
     * 用户生成的请求token。用于保证请求的幂等性。
     * ><notice> 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * ></notice>
     * @example `8751ad99-2ddb-4aac-ad44-84b21102****`
     */
    "ClientToken": string;
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2018-03-06T19:00:00Z`
     */
    "StartTime": string;
    /**
     * 重复次数。取值：
     * - **0**：不循环。
     * - **-1**：无限循环。
     * @example `0`
     */
    "RepeatNum": number;
    /**
     * 用户自定义导播台旁路输出地址对应的推流地址。
     * 若该参数为空，则默认使用阿里云自动生成的输出地址对应的推流地址。
     * @example `rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****`
     */
    "SideOutputUrl": string;
    /**
     * 用户回调地址。
     * 如果您通过[DescribeCasterConfig接口](~~60259~~)查询导播台配置信息，请查看DescribeCasterConfig接口调用返回的参数CallbackUrl值。
     * @example `http://developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-53f0758162964516ac850f2ddc3f****`
     */
    "CallbackUrl": string;
}
