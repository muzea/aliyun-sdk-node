export interface ListPortalMenusResponse {
    /**
     * 请求ID。
     * @example `75912036-5527-4B7E-9265-B481D6651AC2`
     */
    RequestId: string;
    /**
     * 分级门户菜单列表详情的JSON字符串。取值范围：
     * - menuType：菜单类型。
     *     - 0：仪表板
     *     - 1：外链
     *     - 2：电子表格
     *     - 4：目录文件夹
     *     - 5：表单填报
     *     - 6：自助取数
     * - menuId：菜单ID
     * - uri： 菜单关联资源的ID或者URL
     * - showOnlyWithAccess：是否仅授权可见
     * - menuName：菜单显示名称
     * - dependentPermisson：菜单关联的报表资源是否有权限
     * - children：子菜单
     * @example `[{"children":[{"children":[{"children":[{"menuId":"54kqgoa****","menuName":"报表菜单","menuType":0,"showOnlyWithAccess":true,"dependentPermisson":false,"uri":"e5da4a3f-d7f9-4262-a39e-a840043c****"},{"menuId":"pg1n135****","menuName":"目录菜单","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}],"menuId":"23a7d5d8-e55a-4737-b6a1-3c585505****","menuName":"pop三级菜单","menuType":4,"showOnlyWithAccess":true,"dependentPermisson":true}],"menuId":"80764f3c-affd-45a1-aaa1-bb039d8a****","menuName":"pop二级菜单","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}],"menuId":"277f968a-22ff-4ce6-83f0-a82950f4****","menuName":"pop一级菜单","menuType":4,"showOnlyWithAccess":false,"dependentPermisson":true}]`
     */
    Result: string;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
