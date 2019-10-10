interface GetTemplateRequest {
    /**
    * 模板所属资源栈的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源栈ID。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId"?: string;
    /**
    * 更改集ID。
    * @example `1f6521a4-05af-4975-afe9-bc4b45ad5bd5`
    */ "ChangeSetId"?: string;
}
export { GetTemplateRequest };