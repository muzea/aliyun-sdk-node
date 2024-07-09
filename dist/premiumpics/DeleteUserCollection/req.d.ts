export interface DeleteUserCollectionRequest {
    /**
     * 待删除的用户id
     * @example `2c5d68e067f84c99b33def98f30d26d4`
     */
    "UnitId": string;
    /**
     * BizType
     * @example `esp.logo`
     */
    "BizType": string;
    /**
     * userid
     * @example `userid`
     */
    "UserId"?: string;
}
