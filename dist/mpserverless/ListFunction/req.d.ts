export interface ListFunctionRequest {
    /**
     * 页码。从第1页开始。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示的行数。默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询条件。
     * @example `demo`
     */
    "FilterBy"?: string;
    /**
     * 云函数所属的服务空间ID。
     * @example `dece4ea0-d432-4cfa-****-8a88d205e2b8`
     */
    "SpaceId": string;
}
