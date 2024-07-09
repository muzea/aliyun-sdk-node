export interface ListSortScriptsRequest {
    /**
     * 应用的名称或者是应用id
     * @example `my_app`
     */
    "appGroupIdentity": string;
    /**
     * 应用下的版本id
     * @example `110142366`
     */
    "appVersionId": string;
}
