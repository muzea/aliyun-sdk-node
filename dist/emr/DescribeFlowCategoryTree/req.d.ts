interface DescribeFlowCategoryTreeRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 项目ID。
    * @example `FP-ABD24A6163D3****`
    */ "ProjectId": string;
    /**
    * 目录类型：
    * - FLOW
    * - JOB
    * - ADHOC
    * @example `FLOW`
    */ "Type": string;
    "Mode"?: string;
    "Keyword"?: string;
    "CategoryId"?: string;
}
export { DescribeFlowCategoryTreeRequest };