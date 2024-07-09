export interface UpdatePtsSceneBaseLineRequest {
    /**
     * 场景ID。更多信息，请参见[参数说明](~~201321~~)。
     * @example `NB54CV`
     */
    "SceneId": string;
    /**
     * 场景基线数据。可以直接使用amazon-pts-api中的二方包的SceneBaseline类的toJSONString传作为入参。
     * @example `{"avgRt":1,"avgTps":1,"failCountBiz":1,"failCountReq":1,"seg90Rt":1,"seg99Rt":2,"successRateBiz":0.5,"successRateReq":1}`
     */
    "SceneBaseline"?: any;
    /**
     * API基线数据。可以直接使用amazon-pts-api中的二方包的ApiBaseLine类的list数组的toJSONString传作为入参。
     * @example `[{"avgRt":1,"avgTps":1,"failCountBiz":1,"failCountReq":182381,"id":362447,"maxRt":3051,"minRt":0,"name":"1-1","seg50Rt":1,"seg75Rt":1,"seg90Rt":1,"seg99Rt":3,"successRateBiz":1,"successRateReq":0,"timingConnAvg":0},{"avgRt":1.06,"avgTps":1,"failCountBiz":0,"failCountReq":151143,"id":362446,"maxRt":3068,"minRt":0,"name":"dd","seg50Rt":1,"seg75Rt":1,"seg90Rt":1,"seg99Rt":2,"successRateBiz":1,"successRateReq":0}]`
     */
    "ApiBaselines"?: any;
}
