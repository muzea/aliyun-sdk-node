interface DeployK8sApplicationRequest {
    "RegionId"?: string;
    "AppId": string;
    "PreStop"?: string;
    "Envs"?: string;
    "ImageTag"?: string;
    "BatchWaitTime"?: number;
    "Command"?: string;
    "PostStart"?: string;
    "Readiness"?: string;
    "Liveness"?: string;
    "Args"?: string;
    "Replicas"?: number;
    "Image"?: string;
    "CpuLimit"?: number;
    "MemoryLimit"?: number;
    "CpuRequest"?: number;
    "MemoryRequest"?: number;
    "NasId"?: string;
    "MountDescs"?: string;
    "StorageType"?: string;
    "LocalVolume"?: string;
    "PackageUrl"?: string;
    "PackageVersion"?: string;
    "JDK"?: string;
    "WebContainer"?: string;
    "EdasContainerVersion"?: string;
}
export { DeployK8sApplicationRequest };