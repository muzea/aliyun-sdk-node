export interface ModifyGroupPropertyRequest {
    /**
     * 指定服务器分组修改后，服务器分组新的属性信息。以下是相关参数的说明：
     * - **groupFlag**：服务器分组类型。取值：**0**（默认分组）|**1**（其他分组）。
     * - **groupId**：服务器分组ID。
     * - **groupIndex**：分组排序编号。升序排列。
     * - **groupName**：服务器分组名称。此处需设置修改后的服务器分组名称，且该名称不能与原服务器分组名称相同。
     * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取groupFlag和groupId的值。groupFlag和groupId的值不支持修改，仅支持修改groupName的值。
     * @example `[{"groupFlag":1,"groupId":8436682,"groupIndex":1,"groupName":"example"}]`
     */
    "Data": string;
}
