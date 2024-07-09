export interface DescribeDomainWithIntegrityResponse {
    RequestId: string;
    Content: {
        Name: string;
        Points: string[];
        Columns: string[];
    }[];
}
