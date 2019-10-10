interface ExecuteChangeSetRequest {
    /**
    * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 更改集ID。
    * @example `1f6521a4-05af-4975-afe9-bc4b45ad5bd5`
    */ "ChangeSetId": string;
}
export { ExecuteChangeSetRequest };