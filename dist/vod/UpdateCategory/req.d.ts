export interface UpdateCategoryRequest {
    /**
     * 分类名称。
     * - 最多支持64个字节。
     * - UTF-8编码。
     * @example `风景`
     */
    "CateName": string;
    /**
     * 分类ID，仅支持传入单个分类ID。可通过以下方式获取：
     * - 登录[视频点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理** > **音视频/图片分类**或**短视频素材分类**查看分类ID。
     * - 调用[AddCategory](~~AddCategory~~)接口创建分类时会返回。
     * @example `10020****`
     */
    "CateId": number;
}
