export interface CreateLogicDatabaseRequest {
    /**
     * 输入逻辑库别名。
     * @example `test_logic_db`
     */
    "Alias": string;
    /**
     * 组成逻辑库的所有物理库。
     */
    "DatabaseIds": number[];
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
