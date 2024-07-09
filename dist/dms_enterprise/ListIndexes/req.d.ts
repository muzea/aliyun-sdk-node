export interface ListIndexesRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `0`
     */
    "Tid"?: number;
    /**
     * 表ID。
     * @example `1`
     */
    "TableId": string;
    /**
     * 是否逻辑表。
     * @example `false`
     */
    "Logic"?: boolean;
}
