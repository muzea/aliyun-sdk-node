interface DescribeComponentsRequest {
    "RegionId"?: string;
    /**
    * 支持的组件类型。
    * - Tomcat
    * - JDK
    * @example `TOMCAT`
    */ "Type": string;
    /**
    * 应用ID
    * @example `00000000-0000-0000-0000-000000000000`
    */ "AppId"?: string;
}
export { DescribeComponentsRequest };