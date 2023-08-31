# Npm

## Publish a package

```sh
npm run build
npm login
npm pack  # optional: generate a tarball for inspection without actually publishing
npm publish
```

## Deprecate a package or a package version

```sh
npm deprecate $package "$message"
npm deprecate $package@$version "$message"
example: npm deprecate my-thing@1.x "1.x is no longer supported"
example: npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

## Undeprecate a package or a package version

```sh
npm deprecate $package ""
npm deprecate $package@$version ""
```

## Transfer a deprecated package to npm

```sh
npm owner add npm $package
npm owner rm $user $package
```

## Unpublish a package or a package version

```sh
npm unpublish $package -f
npm unpublish $package@$version
```

## Audit vulnerabilities and registry signatures

```sh
npm audit
npm audit --json
npm audit --omit=dev  # "dev", "optional", or "peer"
npm audit --audit-level=high # null, "info", "low", "moderate", "high", "critical", or "none"
npm audit --json --omit=dev --audit-level=high
npm audit signatures
```

## Audit outdated packages and update packages locally / globally

```sh
npm outdated
npm update $package --save
npm update --save

npm outdated -g --depth=0
npm update -g
```

## Clean install only production dependencies

```sh
npm ci --omit=dev  # "dev", "optional", or "peer"
npm ci --omit=dev --omit=optional  # "dev", "optional", or "peer"
```

## List all installed packages

```sh
npm ls
npm ls $package
npm ls $package@$version --depth=1
```

## Clean cache

```sh
npm cache clean --force
```

## List config options / environment variables

```sh
npm config list
npm config list --json

npm prefix
npm prefix -g

npm root
npm root -g

npm whoami

npm doctor

node -v
npm -v

env
```

## Explain installed packages / view current package or installed packages

```sh
npm explain $package
npm view
npm view $package
```

## Link a package (Symlink)

```sh
# create a link to a current package in the node bin location: $prefix/lib/node_modules/$package
# to see a node bin location run: npm config list
npm link

# create a link to a current package in other package from the node bin location: $prefix/lib/node_modules/$package
# reload an IDE after this command is required
npm link $package --save
```

## Unlink a package (Symlink)

```sh
# remove the link to a current package in other package from the node bin location: $prefix/lib/node_modules/$package
# reload an IDE after this command is required
npm unlink $package

# remove the link to a current package in the node bin location: $prefix/lib/node_modules/$package
# to see a node bin location run: npm config list
npm unlink $package -g
```
