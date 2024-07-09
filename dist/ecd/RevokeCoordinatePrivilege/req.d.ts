export interface RevokeCoordinatePrivilegeRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端唯一标识。若使用无影客户端，可在客户端登录界面的**关于**对话框中查看该参数。
     * @example `C78CA9E99315687575DD2844C1F3****`
     */
    "Uuid"?: string;
    /**
     * 用户登录ID。
     * @example `zhangsan`
     */
    "EndUserId"?: string;
    /**
     * 流协同ID。
     * @example `co-fqsm6e8ee75w61fp9`
     */
    "CoId": string;
    /**
     * 协同用户类型。
     * 取值范围：  TENANT_ADMIN（租户管理员）。
     * @example `TENANT_ADMIN`
     */
    "UserType": string;
}
