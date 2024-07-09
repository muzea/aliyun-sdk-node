export interface DeleteStudioLayoutRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `5c6a2a0d-f228-4a64-af62-20e91b96****`
     */
    "CasterId": string;
    /**
     * 布局ID。如果您通过[AddStudioLayout接口](~~215388~~)添加虚拟演播厅的布局设置，请查看AddStudioLayout接口调用返回的参数LayoutId值。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "LayoutId": string;
}
