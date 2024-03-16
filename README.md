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
[Mastodon custom emoji importer](https://github.com/impiaaa/mastodon_import_emoji)
lets you import the entire set at once from the command line. Follow these steps
in the `live` directory of your instance.

If you trust random shell commands from the internet:

```
mkdir emojis
cd emojis
curl -O https://github.com/olivvybee/blobbee/releases/latest/download/blobbee.zip
unzip ./blobbee.zip
cd ..
bundle exec rails runner import_emoji.rb files ./emoji
```

Otherwise:

1. Install the script above.
2. Download the
   [latest PNG archive](https://github.com/olivvybee/blobbee/releases/latest)
   for blobbee.
3. Extract the archive.
4. Run the emoji importer on the directory you extracted, using the `files`
   command.

### Misskey and its many forks (firefish, iceshrimp, sharkey, etc)

The PNG archive includes a `meta.json` that these instances can use to import
the entire archive at once.

1. Download the
   [latest PNG archive](https://github.com/olivvybee/blobbee/releases/latest).
2. In the custom emoji area of your instance, import the `.zip`.

The emojis will be categorised into `blobbee`, `neofox`, and `neocat` categories
automatically.
