export interface AddCasterEpisodeGroupContentRequest {
    /**
     * 用户生成的请求token。用于保证请求的幂等性。
     * > 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `8751ad99-2ddb-4aac-ad44-84b21102****`
     */
    "ClientToken": string;
    /**
     * 设置导播台节目属性。JSON字符串格式。参数采用首字母大写驼峰格式。属性信息说明如下：
     * - **CallbackUrl**：用户回调地址。
     * - **SideOutputUrl**： 用户自定义旁路输出地址。
     * - **RepeatNum**：重复次数。0表示不循环，-1表示无限循环。
     * - **StartTime**：起始时间，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * - **DomainName**：域名。
     * - **Items**：节目列表。
     *     - **ItemName**：节目名称。
     *     - **VodUrl**：点播文件地址，当且仅当资源为文件视频，且视频文件未导入素材库时使用，支持MP4、FLV、TS格式。
     *
     * @example `{"CallbackUrl":"http://example.aliyundoc.com/callBackLive","SideOutputUrl":"rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****","DomainName":"developer.aliyundoc.com ","StartTime":"2018-03-26T16:00:00Z","RepeatNum":-1,"Items":[{"ItemName":"节目1","VodUrl":"http://learn.aliyundoc.com"},{"ItemName":"节目2","VodUrl":"http://demo.aliyundoc.com"}]}`
     */
    "Content": string;
}
