export interface ChangeVisibilityModelRequest {
    /**
     * 数据门户的ID。
     * @example `0d173abb53e84c8ca7495429163b****`
     */
    "DataPortalId": string;
    /**
     * 数据门户的叶子节点菜单ID。
     * - 目录菜单无法进行授权操作
     * - 支持批量传参，ID之间用半角逗号（,）隔开，批量修改的最大数为100
     * @example `54kqgoa****,pg1n135****`
     */
    "MenuIds": string;
    /**
     * 是否仅授权可见。取值范围：
     * - true：仅授权可见
     * - false：都可见
     * @example `true`
     */
    "ShowOnlyWithAccess": boolean;
}
