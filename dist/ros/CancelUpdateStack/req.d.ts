interface CancelUpdateStackRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源栈ID。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId": string;
    /**
    * 取消更新资源栈类型，建议将DisableRollback设置为true。取值范围：
    * - Quick：尽快取消更新资源栈。
    * - Safe：尽可能安全地取消更新资源栈。
    * @example `Safe`
    */ "CancelType"?: string;
}
export { CancelUpdateStackRequest };