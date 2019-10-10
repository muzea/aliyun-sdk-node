interface DescribePkgVersionsRequest {
    "RegionId"?: string;
    /**
    * 应用ID，表示部署包版本所在的应用
    * @example `wa-5d1d9d8c85c7f86**********`
    */ "AppId": string;
    /**
    * 查询页面数
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 查询页面大小
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 部署包版本标签
    * @example `version-demo-tmc-1.4`
    */ "PkgVersionLabel"?: string;
    /**
    * 部署包版本标签搜索关键字，将返回含有此关键字的部署包版本
    * @example `tmc`
    */ "PkgVersionSearch"?: string;
}
export { DescribePkgVersionsRequest };