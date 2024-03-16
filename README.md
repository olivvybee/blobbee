# Blobbee

Blobbee is a set of bee emojis, originally designed to just be pride flag bees
but then expanded to become a full set.

![A grid of bee emojis making various expressions.](https://github.com/olivvybee/blobbee/releases/latest/download/preview.png)

Blobbees are licensed
[CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/), and the code
in this repository is licensed under the
[MIT license](https://opensource.org/license/mit).

Neofox, Neocat, and BunHD were all created by
[Volpeon](https://volpeon.ink/emojis/).

## Adding to a fedi instance

A `.zip` file containing 256x256px PNGs of each emoji is available on the
[releases page](https://github.com/olivvybee/blobbee/releases/latest). The
simplest (but most tedious) way to add the emojis to an instance is to download
that archive, extract it, and upload the emojis you want.

### Mastodon and glitch-soc

**Note: this method requires command line access to the instance. If you don't
have that, unfortunately you will need to add each emoji manually.**

Using
[Mastodon's `tootctl` CLI](https://docs.joinmastodon.org/admin/tootctl/#emoji-import)
lets you import the entire set at once from the command line.

If you trust random shell commands from the internet:

```
curl -O https://github.com/olivvybee/blobbee/releases/latest/download/blobbee.tar.gz
tootctl emoji import --category blobbee ./blobbee.tar.gz
```

Otherwise:

1. Download the
   [latest `blobbee.tar.gz` archive](https://github.com/olivvybee/blobbee/releases/latest).
2. Run `tootctl import` on the archive you downloaded.

### Misskey and its many forks (firefish, iceshrimp, sharkey, etc)

The PNG archive includes a `meta.json` that these instances can use to import
the entire archive at once.

1. Download the
   [latest `blobbee.zip` archive](https://github.com/olivvybee/blobbee/releases/latest).
2. In the custom emoji area of your instance, import the `.zip`.

The emojis will be categorised into `blobbee`, `neofox`, and `neocat` categories
automatically.
