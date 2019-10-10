interface RefreshClusterResourcePoolRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-0E995C0EE7E5ECB3`
    */ "ClusterId": string;
    /**
    * 资源池ID。
    * @example `115`
    */ "ResourcePoolId": number;
}
export { RefreshClusterResourcePoolRequest };