interface ContinueCreateStackRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源栈ID。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId": string;
    "RecreatingResources"?: string[];
}
export { ContinueCreateStackRequest };