export interface AddCategoryRequest {
    /**
     * 分类名称。
     * - 最多支持64个字节。
     * - UTF-8编码。
     * @example `搞笑`
     */
    "CateName": string;
    /**
     * 父分类ID。
     * 可登录[视频点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理** > **音视频/图片分类**或**短视频素材分类**查看分类ID。
     * > - 若传入此参数，则在该父分类下创建子分类。若不传入此参数，则创建一级分类。
     * > - 因短视频素材分类的一级分类全部为系统内置，不支持修改、新增、删除，仅支持在一级分类下创建子分类，所以当`Type`为`material`时，此参数必填。
     * @example `100012****`
     */
    "ParentId"?: number;
    /**
     * 分类类型。取值：
     * - **default**（默认值）：音视频/图片分类。
     * - **material**：短视频素材分类。
     * @example `default`
     */
    "Type"?: string;
}
