export interface ModifyDataCorrectExecSQLRequest {
    /**
     * 数据变更工单号。
     * @example `4328****`
     */
    "OrderId": number;
    /**
     * 修改后的SQL脚本。
     * @example `update tb set id = 1 where id = 1;`
     */
    "ExecSQL": string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `4****`
     */
    "Tid"?: number;
}
