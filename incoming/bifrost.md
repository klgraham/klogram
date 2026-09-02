# Approximate nearest-neighbor search as implemented in Bifrost

Bifrost is a Rust library for approximate k-nearest-neighbor search over unit-normalized `f32` vectors. The crate path is `bifrost`. `Cargo.toml` names the package `bifrost-index` 0.2.1, because `bifrost` was taken. I did not verify a crates.io publish from this tree; changelog still files 0.2.1 work under Unreleased. There is no server, no CLI, and no network protocol. You construct an `HnswIndex`, insert vectors under caller-chosen `u32` ids, search, and optionally write a memory-mapped `.hnsw` snapshot.
