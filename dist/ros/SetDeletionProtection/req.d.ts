export interface SetDeletionProtectionRequest {
    /**
     * 资源栈ID。
     *
     * 嵌套资源栈的删除保护属性由根资源栈决定，始终与根资源栈一致，且无法被修改。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 是否开启资源栈删除保护，取值：
     * - Enabled：开启资源栈删除保护。
     * - Disabled（默认）：关闭资源栈删除保护。此时支持通过控制台或API（DeleteStack）释放资源栈。
     * > 嵌套资源栈删除保护与根资源栈一致。
     * @example `Enabled`
     */
    "DeletionProtection": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
