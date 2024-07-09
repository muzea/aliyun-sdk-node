export interface DeleteCategoryRequest {
    /**
     * 分类ID，仅支持传入单个分类ID。可通过以下方式获取：
     * - 登录[视频点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理**查看分类ID。
     * - 通过[AddCategory](~~AddCategory~~)接口创建分类时会返回。
     * > 若传入的分类ID为父分类的ID，则会同时删除该分类及其所有子分类，请谨慎操作。
     * @example `3300****`
     */
    "CateId": number;
}
