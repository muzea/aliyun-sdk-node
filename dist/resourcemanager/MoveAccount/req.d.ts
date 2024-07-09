export interface MoveAccountRequest {
    /**
     * 需要移动的账号ID。
     * @example `12323344****`
     */
    "AccountId": string;
    /**
     * 目标资源夹ID。
     * @example `fd-bVaRIG****`
     */
    "DestinationFolderId": string;
}
