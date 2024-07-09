export interface FindPrepublishesByParentIdRequest {
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 父预发布ID
     * @example `1`
     */
    "ParentId": number;
}
