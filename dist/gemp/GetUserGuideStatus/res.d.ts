export interface GetUserGuideStatusResponse {
    /**
     * Id of the request
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * map
     * @example `{   "data": {     "monitorGuide": false,     "userRamId": 1344371,     "serviceGuide": false,     "noticeGuide": false,     "userGuide": true,     "serviceGroupGuide": false,     "routeRuleGuide": false,     "incidentGuide": true   }`
     */
    data: any;
}
