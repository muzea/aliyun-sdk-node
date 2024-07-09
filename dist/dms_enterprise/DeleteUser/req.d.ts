export interface DeleteUserRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `23****`
     */
    "Tid"?: number;
    /**
     * 阿里云账号UID。
     * @example `16488219****`
     */
    "Uid": string;
}
